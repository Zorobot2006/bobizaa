//By OMARCHARAF1 
//www.guthub.com/omarcharaf1
//instagram com/ovmar_1
//JITOSSA ADMIN 


import fetch from 'node-fetch';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!args[0]) throw `*تحميل التطبيقات مع الملف الإضافي obb* \n\n مثـال :\n  ${usedPrefix}${command} firee fire`;
  let info = await apkinfo(text);
  let res = await apk(text);

  if (res.size > 2000000000) {
    throw '*ملف APK كبير جدًا. الحد الأقصى لحجم التنزيل هو 2GB ميجابايت*.';
  }

  let message = await conn.sendMessage(m.chat, {
    image: { url: info.icon },
    caption: `*App Name:* \n${info.name}\n*Package Name:* \n${info.packageN} \n\n> *ᴊɪᴛᴏssᴀ ʙᴇᴛᴀ 1.1.0ᴠ*`,
    footer: '_Apk files..._',
  });

 
  await conn.sendMessage(
    m.chat,
    { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName },
    { quoted: m }
  );

  if (info.obb) {
    await conn.sendMessage(m.chat, {
      text: `جاري تحميل ملف OBB لـ ${info.name}...`,
    });

    let obbRes = await fetch(info.obb_link);
    let obbMimetype = obbRes.headers.get('content-type');

    await conn.sendMessage(
      m.chat,
      { document: { url: info.obb_link }, mimetype: obbMimetype, fileName: `${info.packageN}.obb` },
      { quoted: m }
    );
  }

  
  //await conn.deleteMessage(m.chat, message.key.id)
};

handler.command = /^(apk)$/i;
handler.help = ['apk'];
handler.tags = ['applications'];
handler.premium = false;

export default handler;

async function apkinfo(url) {
  let res = await fetch('http://ws75.aptoide.com/api/7/apps/search?query=' + url + '&limit=1');
  let $ = await res.json();

  try {
    let icon = $.datalist.list[0].icon;
  } catch {
    throw 'تعذر تحميل التطبيق انا اسفة';
  }

  let icon = $.datalist.list[0].icon;
  let name = $.datalist.list[0].name;
  let packageN = $.datalist.list[0].package;
  let download = $.datalist.list[0].file.path;
  let obb_link;
  let obb;

  try {
    obb_link = await $.datalist.list[0].obb.main.path;
    obb = true;
  } catch {
    obb_link = '_غير موجود_';
    obb = false;
  }

  if (!download) throw 'تعذر تحميل التطبيق انا اسفة';
  return { obb, obb_link, name, icon, packageN };
}

async function apk(url) {
  let res = await fetch('http://ws75.aptoide.com/api/7/apps/search?query=' + encodeURIComponent(url) + '&limit=1');
  let $ = await res.json();
  let fileName = $.datalist.list[0].package + '.apk';
  let download = $.datalist.list[0].file.path;
  let size = (await fetch(download, { method: 'head' })).headers.get('Content-Length');
  if (!download) throw 'Can\'t download the apk!';
  let icon = $.datalist.list[0].icon;
  let mimetype = (await fetch(download, { method: 'head' })).headers.get('content-type');

  return { fileName, mimetype, download, size };
}
