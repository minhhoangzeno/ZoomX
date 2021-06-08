export const tinyconfigBlog = {
    selector: 'textarea',  // change this value according to the HTML
    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | image code',
    plugins: 'table image code ',
    height: 800,
    width:1500,
    image_list:[],
    file_browser_callback_types: 'image',
    file_picker_callback: function (callback, value, meta) {
        if (meta.filetype == 'image') {
            var input = document.getElementById('my-file');
            input.click();
            input.onchange = function () {
                var file = input.files[0];
                var reader = new FileReader();
                reader.onload = function (e) {
                    console.log('name', e.target.result);
                    callback(e.target.result, {
                        alt: file.name
                    });
                };
                reader.readAsDataURL(file);
            };
        }
    },
    paste_data_images: true,
}
