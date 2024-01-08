import { useState, useCallback } from "react";

function useFormValidation() {
    const [validationErrors, setValidationErrors] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });

        const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;

        if (name === 'email') {
            if (!emailPattern.test(value)) {
                setValidationErrors({
                    ...validationErrors,
                    [name]: 'Невалидный e-mail адрес',
                });
            } else {
                setValidationErrors({
                    ...validationErrors,
                    [name]: '',
                });
            }
        } else {
            setValidationErrors({
                ...validationErrors,
                [name]: evt.target.validationMessage,
            });
        }

        setIsValid(evt.target.closest('form').checkValidity());
    };

    const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
            setInputValue(newValues);
            setValidationErrors(newErrors);
            setIsValid(newIsValid);

            console.log(inputValue, validationErrors, 'форма успешно сброшена')
        },
        [inputValue, validationErrors, setIsValid]
    );

    return { handleChange, validationErrors, inputValue, setInputValue, setValidationErrors, isValid, setIsValid, resetForm }
}

export default useFormValidation;