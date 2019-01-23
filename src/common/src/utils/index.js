import Clipboard from 'clipboard';

const btn = document.createElement('button');


export default {
    copyText(text) {
        return new Promise((resolve, reject) => {
            const clipboard = new Clipboard(btn, {
                text: () => text
            })

            clipboard.on('success', (e) => {
                resolve(e);
            })
            clipboard.on('error', (e) => {
                reject(new Error('复制失败'));
            })

            btn.click();
        });
    }
}