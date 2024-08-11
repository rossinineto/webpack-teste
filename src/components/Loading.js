import React from 'react';
import ReactDelayRender from 'react-delay-render';
import { Loader } from 'semantic-ui-react';

const Loading = () => <Loader active size="massive" />;

export default ReactDelayRender({ delay: 300 })(Loading);