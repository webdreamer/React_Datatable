import React, { useEffect, useState } from 'react';
import { Icon, Typography } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import { useSelector } from 'react-redux';

function StationBeansHeader(props)
{
    let eTime = useSelector(({stationBeanApp}) => stationBeanApp.stationbeans.exeTime)
    const [exeTime, setExeTime] = useState(eTime)
    useEffect(() => {
        setExeTime(eTime)
    }, [eTime]);
    return (
        <div className="flex flex-1 w-full items-center justify-between">
        {exeTime &&
            <div className="flex flex-1 w-full items-center justify-between">
                <div className="flex items-center">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-32 mr-0 sm:mr-12">alarm</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideRightIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="subtitle1">ExecutionTime: {exeTime} </Typography>
                    </FuseAnimate>
                </div>
                <div className="flex flex-1 items-center justify-center px-12">
                    <FuseAnimate animation="transition.expandIn" delay={300}>
                        <Icon className="text-40 mr-0 sm:mr-12">pie_chart</Icon>
                    </FuseAnimate>
                    <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                        <Typography className="hidden sm:flex" variant="h4">StationBeanList</Typography>
                    </FuseAnimate>
                </div>
            </div>}
        </div>
    );
}

export default StationBeansHeader;
