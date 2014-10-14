``` html
@using (Ajax.BeginForm(Model.ActionName, Model.ControllerName, new AjaxOptions { HttpMethod = "Post" }, new { enctype = "multipart/form-data", @id = "form0" }))
{
    <div>
        <div>
            Upload new file:
            <input type="file" name="file" />
        </div>
        <input type="submit" value="Save" />
    </div>
}

<script type="text/javascript">
    $(function () {
        $("#form0").submit(function (event) {
            var dataString;
            event.preventDefault();
            var action = $("#form0").attr("action");
            if ($("#form0").attr("enctype") == "multipart/form-data") {
                //this only works in some browsers.
                //purpose? to submit files over ajax. because screw iframes.
                //also, we need to call .get(0) on the jQuery element to turn it into a regular DOM element so that FormData can use it.
                dataString = new FormData($("#form0").get(0));
                contentType = false;
                processData = false;
            } else {
                // regular form, do your own thing if you need it
            }
            $.ajax({
                type: "POST",
                url: action,
                data: dataString,
                dataType: "json", //change to your own, else read my note above on enabling the JsonValueProviderFactory in MVC
                contentType: contentType,
                processData: processData,
                success: function (data) {
                    //BTW, data is one of the worst names you can make for a variable

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    //do your own thing
                    alert("fail");
                }
            });
        }); //end .submit()
    });
</script>

