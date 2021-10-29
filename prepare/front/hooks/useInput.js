import { useState, useCallback } from 'react';

export default (initialValue = null) => {
    // const [id, setId] = useState("");
    // const onChangeId = useCallback((e) => {
    //   setId(e.target.value);
    // }, []);

    //범용적으로 쓸 수 있게 바꾸기
    const [value, setValue] = useState(initialValue);
    const handler = useCallback(e => {
        setValue(e.target.value);
    }, []);

    return [value, handler];
    // [id, onChangeId]를 배열에 담아 return
};
