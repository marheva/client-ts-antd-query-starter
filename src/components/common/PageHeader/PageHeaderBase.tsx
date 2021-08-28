import React from 'react'
import { PageHeader } from 'antd'
import { PageHeaderCustomProps } from './types'


const PageHeaderBase = ({
    ...props
}: PageHeaderCustomProps): JSX.Element => <PageHeader {...props} />



export default PageHeaderBase