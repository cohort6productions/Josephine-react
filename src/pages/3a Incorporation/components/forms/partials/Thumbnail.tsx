import * as React from 'react';

const Thumb = (props: {file: string}) => {
    const {file} = props;
    return (
        <img src={file}
            className="img-thumbnail mt-2"
            height={200}
            width={200} />
    );
}

export default Thumb;