import { useState, useCallback } from "react";

function FormValidation() {
    const [validationErrors, setValidationErrors] = useState({});
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const handleChange = (evt) => {
        const { name, value } = evt.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });

        setValidationErrors({
            ...validationErrors,
            [name]: evt.target.validationMessage,
        });

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

export default FormValidation;