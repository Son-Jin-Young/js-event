class EventDispatcher {
    dispatch(event, data) {
        console.log(data);
        var customEvent = new CustomEvent(event, {
            detail: data
        });

        dispatchEvent(customEvent);
    }
}