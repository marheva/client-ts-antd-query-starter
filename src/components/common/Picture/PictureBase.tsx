import React from 'react';
import { PictureProps } from './types';

const PictureBase = ({ sources = [], alt, ...props }: PictureProps): JSX.Element => <picture {...props}>
    <>
        {sources.map(({ type = 'jpg', media = '', srcset = '' }, index) => {
            return <source type={`image/${type}`} media={media} srcSet={srcset} key={index} />
        })}
        <img alt={alt} />
    </>
</picture>;

export default PictureBase;