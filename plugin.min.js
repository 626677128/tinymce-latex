tinymce.PluginManager.add("latex", function(editor, url) {
    editor.addButton("latex", {
        text: 'TeX',
        onclick: function() {
            editor.windowManager.open({
                title: 'Latex Editor',
                url: url + '/container.html',
                buttons: [{
                    text: 'Insert',
                    subtype: 'primary',
                    onclick: function(e) {
                        var popupFrame = $(e.currentTarget).find("iframe").get(0);
                        editor.insertContent($(popupFrame).contents().find("#formula").val());
                        this.parent().parent().close();
                    }
                }, {
                    text: 'Close',
                    onclick: function() {
                        this.parent().parent().close();
                    }
                }],
                width: 550,
                height: 150
            })
        }
    })
})
