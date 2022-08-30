
function FormService() {
    return {
        /**
         * 
         * @param {[string]} fildNumbers 
         * @param {any} object 
         * @returns 
         */
        dataFormat(fildNumbers, object) {
            fildNumbers.forEach((fild) => {
                object[fild] = Number(object[fild])
            });
            return object;
        },
        
        setValue(fildName, event, setData) {
            const value = event.target.value;
            return setData((formData) => {
                formData[fildName] = value;
                return formData;
            });
        }
    }
}

export const formService = new FormService();
