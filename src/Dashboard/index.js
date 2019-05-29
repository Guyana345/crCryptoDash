import React from 'react';
import styled from 'styled-components';
import Page from '../Shared/Page';
import PriceGird from './PriceGrid';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;
`;

export default function() {
    return (
        <Page name="dashboard">
            <PriceGird/>
            <ChartGrid>
                <CoinSpotlight/>
                <PriceChart/>
            </ChartGrid>

        </Page>
    )
}