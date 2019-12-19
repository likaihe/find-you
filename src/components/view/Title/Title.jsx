import React from 'react';
import { Box, Flex } from "rebass";


const Title = ({ title }) => (
    <Flex flexDirection="column" width={1} alignItems="center" >
        <Box>
            <h1>{title}</h1>
        </Box>
    </Flex>

);

export default Title