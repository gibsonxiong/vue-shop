function trim(value){
    return String(value).replace(/^\s*|\s*$/g, '');
}

const validate = {
    mobile(value){
        return /^\d{11}$/.test(trim(value));
    },

    ethAddress(value){
        return /^0x\w{40}$/g.test(value);
    },

    bscAddress(value){
        return /^bsc_\w{60}$/g.test(value);
    }
}

export default validate;