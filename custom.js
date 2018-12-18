class EventDispatcher {
    dispatch(data) {
        console.log(data);
        var customEvent = new CustomEvent('customTestEvent', {
            detail: data
        });

        dispatchEvent(customEvent);
    }
}