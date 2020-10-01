import * as React from 'react';

/* -------------------------------------------------------------------------- */
/*                              Import Functions                              */
/* -------------------------------------------------------------------------- */

import getName from './functions/getName'

import { fetchPostFunc } from './functions/fetchPostFunc'

import { fetchGetFunc } from './functions/fetchGetFunc'

import { isLoginGetToken } from './functions/isLoginGetToken'

import { isLoginFunc } from './functions/isLoginFunc'

import { logOut } from './functions/logOut'

import { userImageChage } from './functions/userImageChage'

import { isFaildFunc } from './functions/isFaildFunc'

import { daybookWriteStateContentFunc } from './functions/daybookWriteStateContentFunc'

import { isSendFunc } from './functions/isSendFunc'

import { userImageGet } from './functions/userImageGet'

/* -------------------------------------------------------------------------- */

const ContextApi = React.createContext();

const ContextConsumer = ContextApi.Consumer;

class ParentContext extends React.Component {

    state = {
        name: 'Dede',
        surname: "Keke",
        age: 99,

        /* -------------------------------------------------------------------------- */
        /*                                FetctPostFunc                               */
        /* -------------------------------------------------------------------------- */
        fetchPostResponse: '',
        fetchPostFunc: fetchPostFunc.bind(this),

        /* -------------------------------------------------------------------------- */
        /*                                FetctGetFunc                               */
        /* -------------------------------------------------------------------------- */
        fetchGetResponse: '',
        fetchGetFunc: fetchGetFunc.bind(this),

        /* -------------------------------------------------------------------------- */
        /*                                   IsLogin                                  */
        /* -------------------------------------------------------------------------- */
        isLogin: {
            login: false
        },
        isLoginGetToken: isLoginGetToken.bind(this),
        isLoginFunc: isLoginFunc.bind(this),

        logOut: logOut.bind(this),

        /* -------------------------------------------------------------------------- */
        /*                                    Faild                                   */
        /* -------------------------------------------------------------------------- */
        faild: {
            state: false,
            content: ''
        },
        isFaildFunc: isFaildFunc.bind(this),


        /* -------------------------------------------------------------------------- */
        /*                                DaybookState                                */
        /* -------------------------------------------------------------------------- */
        daybookWriteContentState: {
            content: '',
        },
        daybookWriteStateContentFunc: daybookWriteStateContentFunc.bind(this),
        isSendFunc: isSendFunc.bind(this),



        /* -------------------------------------------------------------------------- */
        /*                                  userImage                                 */
        /* -------------------------------------------------------------------------- */

        userImagePayload: 1,
        userImageChage: userImageChage.bind(this),
        userImageGet: userImageGet.bind(this),

    }

    render() {
        return (
            <ContextApi.Provider value={{ data: this.state }}>
                {this.props.children}
            </ContextApi.Provider >
        )
    }
}



export { ContextApi, ParentContext, ContextConsumer };

