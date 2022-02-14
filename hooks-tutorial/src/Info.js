import useInputs from './useInputs';

const Info = () => {
    const [state, dispatch] = useInputs({
        name : '',
        nickname : ''
    });

    const {name, nickname} = state;

    const onChange = e => {
        dispatch(e.target);
    };

    return(
        <div>
            <div>
                <input value={name} onChange={onChange}></input>
                <input value={nickname} onChange={onChange}></input>
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;