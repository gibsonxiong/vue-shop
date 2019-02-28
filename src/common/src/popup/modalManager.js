let stack = [];

const modalManager = {
    push(modal){
        let last = stack[stack.length - 1];

        if(last) last.modal.stashModal();

        stack.push({
            modal
        });
    },

    pop(){
        stack.pop();

        let last = stack[stack.length - 1];

        if(last) last.modal.cancelStashModal();
    }
};

export default modalManager;