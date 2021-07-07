import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class TextEditor extends Component {
render() {
    return (
        <div className="TextEditor">
            <h2>Journal</h2>
            <CKEditor
                    editor={ ClassicEditor }
                    

                   />
            
        </div>
    );
}
}

export default TextEditor;