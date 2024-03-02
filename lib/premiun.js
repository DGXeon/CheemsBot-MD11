//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require("fs");
const toMs = require("ms");

const premium = JSON.parse(fs.readFileSync('./src/data/role/premium.json'))

const addPremiumUser = (userId, expired, _dir) => {
	const cekUser = premium.find((user) => user.id == userId);
	if (cekUser) {
		cekUser.expired = cekUser.expired + toMs(expired);
	} else {
		const obj = { id: userId, expired: Date.now() + toMs(expired) };
		_dir.push(obj);
	}
	fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(_dir));
};

const getPremiumPosition = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return position;
	}
};

const getPremiumExpired = (userId, _dir) => {
	let position = null;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			position = i;
		}
	});
	if (position !== null) {
		return _dir[position].expired;
	}
};

const checkPremiumUser = (userId, _dir) => {
	let status = false;
	Object.keys(_dir).forEach((i) => {
		if (_dir[i].id === userId) {
			status = true;
		}
	});
	return status;
};

const expiredPremiumCheck = (XeonBotInc, msg, _dir) => {
	setInterval(() => {
		let position = null;
		Object.keys(_dir).forEach((i) => {
			if (Date.now() >= _dir[i].expired) {
				position = i;
			}
		});
		if (position !== null) {
			idny = _dir[position].id;
			console.log(`Premium expired: ${_dir[position].id}`);
			_dir.splice(position, 1);
			fs.writeFileSync("./src/data/role/premium.json", JSON.stringify(_dir));
			idny ? XeonBotInc.sendMessage(idny, { text: "Your premium has run out, please buy again." }) : "";
			idny = false;
		}
	}, 1000);
};

const getAllPremiumUser = (_dir) => {
	const array = [];
	Object.keys(_dir).forEach((i) => {
		array.push(_dir[i].id);
	});
	return array;
};

module.exports = {
	addPremiumUser,
	getPremiumExpired,
	getPremiumPosition,
	expiredPremiumCheck,
	checkPremiumUser,
	getAllPremiumUser,
};