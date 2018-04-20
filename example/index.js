import React from 'react'
import {render} from 'react-dom'
import {HelloWorld, HelloWorld2} from "@jdcfe/lrc-m";


render(
    <div>
        <HelloWorld/>
        <HelloWorld2/>
    </div>, document.getElementById('app')
);