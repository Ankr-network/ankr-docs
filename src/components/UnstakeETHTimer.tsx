import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatDistanceToNowStrict } from 'date-fns';

interface IUnstakeDays {
    timestamp: number;
}

const baseUrl = 'https://api.dev.staking.ankr.com/';

const WITHDRAW_ESTIMATION_URL = '/v1alpha/beaconmonitor/withdraw_estimation';

export const UnstakeETHTimer = () => {
    const [days, setDays] = useState<string>('');
    useEffect(() => {
        const url = new URL(WITHDRAW_ESTIMATION_URL, baseUrl).toString();
        axios.get<IUnstakeDays>(url)
            .then((res) => {
                setDays(formatDistanceToNowStrict(res.data.timestamp * 1000, {
                    unit: 'day',
                    roundingMethod: 'ceil',
                }))
            });
    }, []);

    return days;
}
