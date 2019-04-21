import * as React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

interface IBreadcrumbProps {
    allPaths: string[];
    currentPath: number;
    handlePath: (index: any) => void;
}
const Breadcrumbs = (props: IBreadcrumbProps) => {
    const handleClickPath = (index:number) => props.handlePath(index)

    return (
    <>
        {props.allPaths.length > 0 ?
            <Breadcrumb>
            {
                props.allPaths.map((path, i) => (
                    <BreadcrumbItem     
                        onClick={handleClickPath.bind(null,i)}
                        key={i} 
                        active={i === props.currentPath} 
                        disabled={i === props.currentPath}
                        className={i > props.currentPath ? 'd-none' : ''}
                        >
                        {path}
                    </BreadcrumbItem>
                ))
            }
            </Breadcrumb>
            
            : <div />}

    </>)
}

export default Breadcrumbs;