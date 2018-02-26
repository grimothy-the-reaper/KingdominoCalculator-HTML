function Increment(terrain, type) {
    var input = '#input-' + terrain + '-' + type;
    $(input).val(GetCurrentValue(terrain, type) + 1);
    GetTotal(terrain);
}

function Decrement(terrain, type) {
    var input = '#input-' + terrain + '-' + type;
    if (GetCurrentValue(terrain, type) === 0) {
        $(input).val(0);
    }
    else {
        $(input).val(GetCurrentValue(terrain, type) - 1);
    }
    GetTotal(terrain);
}

function GetCurrentValue(terrain, type) {
    return GetInt('#input-' + terrain + '-' + type);
}

function GetTotal(terrain) {
    var total = '#total-' + terrain;
    $(total).text(GetCurrentValue(terrain, 'tile') * GetCurrentValue(terrain, 'crown'));
    GetGrandTotal();
}

function GetGrandTotal() {
    var temp = GetCurrentGrandTotalValue();
    $('span[id^="total"]').each(function () {
        temp += parseInt($(this).text())
    });
    $('#grand-total').text(temp);
}

function GetCurrentGrandTotalValue() {
    var input = '#grand-total';
    return GetInt('#grand-total');
}

function GetInt(control) {
    if (!$.isNumeric($(control).val())) {
        return 0;
    }
    return parseInt($(control).val());
}