function Increment(terrain, type) {
    var control = '#input-' + terrain + '-' + type;
    var newVal = GetInputValue(terrain, type) + 1;
    SetText(control, newVal);
    GetTotal(terrain);
}

function Decrement(terrain, type) {
    var control = '#input-' + terrain + '-' + type;
    var newVal = GetInputValue(terrain, type) === 0 ? 0 : GetInputValue(terrain, type) - 1;
    SetText(control, newVal);
    GetTotal(terrain);
}

function GetTotal(terrain) {
    var control = '#total-' + terrain;
    var newVal = GetInputValue(terrain, 'tile') * GetInputValue(terrain, 'crown');
    SetText(control, newVal);
    GetGrandTotal();
}

function GetGrandTotal() {
    var temp = 0;
    temp += GetInt('#total-field');
    temp += GetInt('#total-forest');
    temp += GetInt('#total-gold');
    temp += GetInt('#total-grass');
    temp += GetInt('#total-waste');
    temp += GetInt('#total-water');
    SetText('#grand-total', temp);
}

function SetText(control, text) {
    $(control).text(text);
}

function GetInputValue(terrain, type) {
    return GetInt('#input-' + terrain + '-' + type);
}

function GetInt(control) {
    if (!$.isNumeric($(control).text())) {
        return 0;
    }
    return parseInt($(control).text());
}