var Discordie = require("discordie");
var Events = Discordie.Events;

var client = new Discordie();
var Cute = ["http://imgur.com/3SCr8A4.jpg", "http://imgur.com/Ixh7OiS.jpg", "http://imgur.com/iI4n0dA.jpg", "http://imgur.com/aMhImL2.jpg", "http://imgur.com/fFOuefu.jpg", "http://imgur.com/LIep8s3.jpg", "http://imgur.com/agH9bWo.jpg", "http://imgur.com/YQqIZPZ.jpg", "http://imgur.com/RlBM7Sr.jpg", "http://imgur.com/LgyEpco.jpg", "http://imgur.com/TmcV9mG.jpg", "http://imgur.com/9naxqpG.jpg", "http://imgur.com/MCKdHMz.jpg", "http://imgur.com/ZgqlPwL.jpg", "http://imgur.com/OeeeYXr.jpg", "http://imgur.com/SiJpRXq.jpg", "http://imgur.com/urwlif4.jpg", "http://imgur.com/ybRsrUm.jpg", "http://imgur.com/wPVIvff.jpg", "http://imgur.com/KjN5GgW.jpg", "http://imgur.com/70wa7fB.jpg", "http://imgur.com/SiYNBTF.jpg", "http://imgur.com/RANDUif.jpg", "http://imgur.com/I1fIA7u.jpg", "http://imgur.com/UWITzZ3.jpg", "http://imgur.com/6O32qgb.jpg", "http://imgur.com/cfCmdW8.jpg", "http://imgur.com/KN6xhwR.jpg", "http://imgur.com/dLijrKq.jpg", "http://imgur.com/OoTLlUL.jpg", "http://imgur.com/ceAvX3N.jpg", "http://imgur.com/5B58pt6.jpg", "http://imgur.com/auyJqlk.jpg", "http://imgur.com/6KeBnIF.jpg", "http://imgur.com/1nrtO7I.jpg", "http://imgur.com/pD6q45B.jpg", "http://imgur.com/ac0qDuw.jpg", "http://imgur.com/pI3hkA2.jpg", "http://imgur.com/amI7wNI.jpg", "http://imgur.com/LIi4RbX.jpg", "http://imgur.com/K7xpZ2e.jpg", "http://imgur.com/nlzqvDO.jpg", "http://imgur.com/ZGsZueK.jpg", "http://imgur.com/8nsISWW.jpg", "http://imgur.com/nnceAbr.jpg", "http://imgur.com/Q7Y5sU2.jpg", "http://imgur.com/YwcUQbT.jpg", "http://imgur.com/Qqzotcy.jpg", "http://imgur.com/pN5zlVO.jpg", "http://imgur.com/VW8TTHs.jpg", "http://imgur.com/fyoun6c.jpg", "http://imgur.com/pAUuBj7.jpg", "http://imgur.com/n8PX6An.jpg", "http://imgur.com/Gy2VeDp.jpg", "http://imgur.com/xYcxB1v.jpg", "http://imgur.com/vYsDQFl.jpg", "http://imgur.com/i4XLs6b.jpg", "http://imgur.com/b80Xyai.jpg", "http://imgur.com/NZHYkId.jpg", "http://imgur.com/RCTG7s7.jpg", "http://imgur.com/TO5iAx7.jpg", "http://imgur.com/etVW4tl.jpg", "http://imgur.com/8GMFvBF.jpg", "http://imgur.com/D1H7DAj.jpg", "http://imgur.com/GMOAarh.jpg", "http://imgur.com/dmUtACS.jpg", "http://imgur.com/Ps3VrT4.jpg", "http://imgur.com/MXQUjqo.jpg", "http://imgur.com/E8lw3YP.jpg", "http://imgur.com/W0R2TbS.jpg", "http://imgur.com/taVNmcu.jpg", "http://imgur.com/tAiN8wz.jpg", "http://imgur.com/WWGo3lN.jpg", "http://imgur.com/wTaQUxi.jpg", "http://imgur.com/46YWiOP.jpg", "http://imgur.com/KWDmAHR.jpg", "http://imgur.com/gaRjk4M.jpg", "http://imgur.com/9jIAmoI.jpg", "http://imgur.com/nZmFouW.jpg", "http://imgur.com/PQ4KYX7.jpg", "http://imgur.com/pbs2lSb.jpg", "http://imgur.com/WKbnq8h.jpg", "http://imgur.com/xjQuqDa.jpg", "http://imgur.com/rOSMrc6.jpg", "http://imgur.com/l68OQtL.jpg", "http://imgur.com/WothpfT.jpg", "http://imgur.com/Y1fGxr5.jpg", "http://imgur.com/3JkogPP.jpg", "http://imgur.com/SYOsELQ.jpg", "http://imgur.com/tKKR9Ez.jpg", "http://imgur.com/Ll16uR2.jpg", "http://imgur.com/VIrXKtm.jpg", "http://imgur.com/Id3jXpN.jpg", "http://imgur.com/0RXBbAP.jpg", "http://imgur.com/wM9xjhH.jpg", "http://imgur.com/QX2VrfJ.jpg", "http://imgur.com/nYKnS5b.jpg", "http://imgur.com/w32iUuA.jpg", "http://imgur.com/7CzXmZO.jpg", "http://imgur.com/b6UXcSD.jpg", "http://imgur.com/szAMA4g.jpg", "http://imgur.com/hO4PfUJ.jpg" ]
var Hugs = ["http://i.imgur.com/S70uPE5.jpg", "http://imgur.com/70nCWm8.jpg", "http://imgur.com/IUK05ZH.jpg", "http://imgur.com/g2Q7Iic.jpg", "http://imgur.com/dHdVWnt.jpg", "http://imgur.com/NMBKqvd.jpg", "http://imgur.com/bUZNe5J.jpg", "http://imgur.com/wrdUsdx.jpg", "http://imgur.com/c1Ga4VG.jpg", "http://imgur.com/FTg6bRB.jpg", "http://imgur.com/MS2shpX.jpg", "http://imgur.com/buLnk6h.jpg", "http://imgur.com/IyvcFMS.jpg", "http://imgur.com/JuekzTF.jpg", "http://imgur.com/daZsVBs.jpg", "http://imgur.com/GFjrXSo.jpg", "http://imgur.com/WqLlBMp.jpg", "http://imgur.com/I2vLbxe.jpg", "http://imgur.com/5erfEZZ.jpg", "http://imgur.com/oq1O4Ep.jpg", "http://imgur.com/lGlxbeb.jpg", "http://imgur.com/UgvlcYG.jpg", "http://imgur.com/671DVIt.jpg", "http://imgur.com/YRUrIpI.jpg", "http://imgur.com/TCul2xb.jpg", "http://imgur.com/g9w4p3R.jpg", "http://imgur.com/wPEvVAy.jpg", "http://imgur.com/sLq6hPm.jpg", "http://imgur.com/pQqms5g.jpg", "http://imgur.com/beNIkcU.jpg", "http://imgur.com/o4G7lxw.jpg", "http://imgur.com/e8awL40.jpg", "http://imgur.com/Rmfnd2l.jpg", "http://imgur.com/GCa2EBj.jpg", "http://imgur.com/M0s3nAW.jpg", "http://imgur.com/5LTBqw1.jpg", "http://imgur.com/xOqmGue.jpg", "http://imgur.com/ZBecFd7.jpg"]
var Pats = ["http://imgur.com/BcjvPfz.jpg", "http://imgur.com/dz3CKmd.jpg", "http://imgur.com/YjID8H3.jpg", "http://imgur.com/QbICX2A.jpg", "http://imgur.com/6lwdccR.jpg", "http://imgur.com/4tq1L6X.jpg", "http://imgur.com/ZBv2scL.jpg", "http://imgur.com/DLDbn3K.jpg", "http://imgur.com/BM9sfWt.jpg", "http://imgur.com/2SZZkoA.jpg", "http://imgur.com/xkdVGEi.jpg", "http://imgur.com/SsKOQEO.jpg", "http://imgur.com/MurrQVQ.jpg", "http://imgur.com/HGEhTBb.jpg", "http://imgur.com/Isi0w5M.jpg", "http://imgur.com/SLzeymU.jpg", "http://imgur.com/JTszQza.jpg", "http://imgur.com/Bf5n9hX.jpg", "http://imgur.com/AruAg1n.jpg", "http://imgur.com/2AKYPZG.jpg", "http://imgur.com/iRWoIts.jpg", "http://imgur.com/XF2fqxW.jpg", "http://imgur.com/cEfDYBi.jpg", "http://imgur.com/HANqhuL.jpg", "http://imgur.com/2c4bzE4.jpg", "http://imgur.com/kz2WWQ0.jpg", "http://imgur.com/8yo4E0x.jpg", "http://imgur.com/vFbIfCL.jpg", "http://imgur.com/vNHZjXa.jpg", "http://imgur.com/ABC391i.jpg", "http://imgur.com/POiLR0a.jpg", "http://imgur.com/Gucb0aW.jpg", "http://imgur.com/iJJRlIY.jpg", "http://imgur.com/TG7RaXk.jpg", "http://imgur.com/nYuQL9U.jpg", "http://imgur.com/2Rz8aGD.jpg", "http://imgur.com/5ZfMb6f.jpg", "http://imgur.com/pLmI8uG.jpg", "http://imgur.com/6I24eGS.jpg"]
var Ratings = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10", "8/10", "9/10", "10/10"]

function getRandom(array) {
  var randomIndex = Math.floor((Math.random() * array.length));
   return array[randomIndex];

}

client.connect({ token: 'MjQ2MDE2NTUyMzU1MzY0ODY0.CwY5uQ.ROSWZRm3MuyYtk0We-NtC6t97UE'
 });

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log("Connected as: " + client.User.username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "-lolihug")
    e.message.channel.sendMessage(getRandom(Hugs));
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "-loli")
    e.message.channel.sendMessage(getRandom(Cute));
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content == "-lolipat")
    e.message.channel.sendMessage(getRandom(Pats));
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if (e.message.content.substring(0,5) == "!rate")
    e.message.channel.sendMessage(getRandom(Ratings));
});
