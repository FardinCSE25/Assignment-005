*** The difference between getElementById, getElementByClassName, querySelector/querySelectorAll ***
* getElementById : We can select an element of a certain id of our HTML code by using getElementById

* getElementByClassName : We can select all the elements identified by a certain class by using getElementByClassName

* querySelector : We can select a single element specifically the first element of HTML by using querySelector. We can select anything like elements of classes or tags or CSS styles.

* querySelectorAll : We can select all the elements of HTML by using querySelectorAll. We can select all the elements of same classes or same tags or same CSS styles.

*** How do you create and insert a new element into the DOM ? ***
* We can create an element by using document.createElement() and can insert it to any parent node by using parentNode.appendChild()

*** What is Event Bubbling and how does it work ? ***
* Event Bubbling : Event bubbling mainly means the bubbling of event to the upper parent elements of any child node. If we trigger any event (added by eventListener) of an element than it also triggers the event to the parent nodes of the element and it affects to all the child nodes of the parent node.

*** What is Event Delegation in JavaScript? Why is it useful ? ***
* Event delegation : It means transferring the event handling power to the parent node. that means when we add event listener to any child element of a parent node, the event always works by triggering child node. But we know event always bubbles to the parent node. When we add a new element as a sibling node of the child node, the event added to the old child node doesn't work in the newly added child node. so, we use event delegation for transferring the event handler to the parent node so that the parent node can control the event handler when any of its child node is triggered (it can be old child node or any newly child node). It is very useful because it saves storage as we add the event handler to the parent node in spite of adding it to all the child nodes individually. that's why the newly added child node also works under the event handler.

*** What is the difference between preventDefault() and stopPropagation() methods ? ***
* preventDefault : It removes the default characteristics of any event.

* stopPropagation : It used to stop the bubbling of event to the parent node. We know when a event is triggered by a element, it traverse to the parent node generally. But when we use stopPropagation, it stops the bubbling to parent node when we trigger any event its child node