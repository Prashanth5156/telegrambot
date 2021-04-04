const sendNewAssetAvailableEmail = require('../mailer/emails/new-asset');
const User = require('../models/User');
const sendTelegramMessage = require('../services/telegram-bot');

const sendNewAssetAvailableNotifications = async (asset) => {
    try {

        let users = await User.forge()
            .where({
                subscribe_new_assets: 1,
                active: 1,
            })
            .fetchAll();
        users = users.toJSON();

        await Promise.all(users.map(async (user) => {
            if (user.address) {
                await sendNewAssetAvailableEmail(user, asset);
            } else {
                await sendTelegramMessage('new-asset-available', user.telegram_chat_id, {
                    asset,
                })
            }
        }));

        // send notification to catch all address
        await sendNewAssetAvailableEmail(
            {
                address: process.env.CATCH_ALL_EMAIL_ADDRESS,
                token: 'whenwillifindlove',
            },
            asset,
        )

    } catch (err) {
        console.log(err);
    }
}

module.exports = sendNewAssetAvailableNotifications;