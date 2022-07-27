import React from 'react';
import ReduxToastr from "react-redux-toastr";

const ReduxToast:React.FC = () => {
    return (
        <ReduxToastr
            newestOnTop={false}
            preventDuplicates
            progressBar
            closeOnToastrClick
            transitionIn='fadeIn'
            transitionOut='fadeOut'
        />
    );
};

export default ReduxToast;