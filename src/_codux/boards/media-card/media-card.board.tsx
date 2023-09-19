import React from 'react';
import { createBoard } from '@wixc3/react-board';
import MediaCard from '../../../components/MediaCard';

const function MediaCardProps {
    heading: string;
    text: string;
  }


export default createBoard({
    name: 'MediaCard',
    Board: () => <MediaCard />,
    isSnippet: true,
});
