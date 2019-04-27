import * as React from 'react';

interface IThumbnailProps {
    file: File
}
class Thumb extends React.Component<IThumbnailProps, {loading: boolean, thumb?: string | ArrayBuffer | null}> {
    constructor(props: IThumbnailProps) {
        super(props)
        this.state = {
        loading: false,
        thumb: undefined,
      };
    }
    
      public componentWillReceiveProps(nextProps: IThumbnailProps) {
        if (nextProps.file) { 
            return; 
        }
    
        this.setState({ loading: true }, () => {
          const reader = new FileReader();
    
          reader.onloadend = () => {
            this.setState({ 
                loading: false, 
                thumb: reader.result 
            });
          };
            reader.readAsDataURL(nextProps.file);
          
        });
      }
    
      public render() {
        const { file } = this.props;
        const { loading, thumb } = this.state;
    
        if (!file) { return null; }
    
        if (loading) { return <p>loading...</p>; }
    
        return (
            <img 
                src={String(thumb)}
                alt={file.name}
                className="img-thumbnail mt-2"
                height={200}
                width={200}
            />
        );
    }
}

export default Thumb;