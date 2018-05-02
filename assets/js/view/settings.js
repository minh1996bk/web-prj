function leftSideSettingHtm() {
    return `
    <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action" onclick="showChangePassword()">Mật khẩu</button>
        <button type="button" class="list-group-item list-group-item-action" onclick="showDeactive()">Vô hiệu hóa tài khoản</button>
    </div>
    `;
}

function changePasswordHtm() {
    return `
    <form class="form-horizontal">
        <fieldset>
        <!-- Password input-->
        <div class="form-group">
        <label class="col-md-4 control-label" for="piCurrPass">Mật khẩu cũ</label>
        <div class="col-md-4">
            <input id="piCurrPass" name="piCurrPass" type="password" placeholder="" class="form-control input-md" required="">
            
        </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
        <label class="col-md-4 control-label" for="piNewPass">Mật khẩu mới</label>
        <div class="col-md-4">
            <input id="piNewPass" name="piNewPass" type="password" placeholder="" class="form-control input-md" required="">
            
        </div>
        </div>

        <!-- Password input-->
        <div class="form-group">
        <label class="col-md-4 control-label" for="piNewPassRepeat">Nhập lại mật khẩu mới</label>
        <div class="col-md-4">
            <input id="piNewPassRepeat" name="piNewPassRepeat" type="password" placeholder="" class="form-control input-md" required="">
            
        </div>
        </div>

        <!-- Button (Double) -->
        <div class="form-group">
        <label class="col-md-4 control-label" for="bCancel"></label>
        <div class="col-md-8">
        <button id="apply" name="bGodkend" class="btn btn-success">Đổi mật khẩu</button>
        <button id="cancel" name="bCancel" class="btn btn-danger">Hủy</button>
        </div>
        </div>

        </fieldset>
    </form>
    `
}

function deactiveHtm() {
    return `
    <form class="form-horizontal">
        <fieldset>
        <!-- Password input-->
        <div class="form-group">
        <label class="col-md-4 control-label" for="piCurrPass">Mật khẩu cũ</label>
        <div class="col-md-4">
            <input id="piCurrPass" name="piCurrPass" type="password" placeholder="" class="form-control input-md" required="">
            
        </div>
        </div>
        <!-- Button (Double) -->
        <div class="form-group">
        <label class="col-md-4 control-label" for="bCancel"></label>
        <div class="col-md-8">
        <button id="cancel" name="bCancel" class="btn btn-danger">Vô hiệu hóa</button>
        </div>
        </div>

        </fieldset>
    </form>
    `
}