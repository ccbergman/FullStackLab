import $ from "jquery-ajax";

export function fetchItems() {
    return function (dispatch) {
        dispatch(requestItems());
        $.get("/api/items").done(function (data) {
            dispatch(receiveItems(data));
        });
    };
}

function requestItems() {
    return {
        type: "REQUEST_ITEMS"
    };
}

function receiveItems(items) {
    return {
        type: "RECEIVE_ITEMS",
        items
    };
}

export function addItem(item) {
    return function (dispatch) {
        $.ajax({
            url: "/api/items/",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(item)
        }).done(function () {
            dispatch(fetchItems());
        });
    };
}

export function removeItem(id) {
    return function (dispatch) {
        $.ajax({
            url: "/api/itemss/" + encodeURIComponent(id),
            method: "DELETE"
        }).done(function () {
            dispatch(fetchItems());
        });
    };
}

export function updateContact(id, contact) {
    return function (dispatch) {
        $.ajax({
            url: "/api/contacts/" + encodeURIComponent(id),
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(contact)
        }).done(function () {
            dispatch(fetchContacts());
        });
    };
}
