import React from 'react';

const Blog = () => {
    return (
        <div className='mx-auto mt-4 w-96'>
            <h1 className='text-center text-3xl font-bold'> Blog</h1>
            <div className='text-center'>
            <h1 className='text-xl text-primary'>What are the different ways to manage a state in a React application?</h1>
            <h1>When we have to pass data from one component to another then it can be done easily, but if we want to pass our data in nested states then it becomes complicated which is called prop drilling i.e
                  passing the data as props from parent component to child component.To avoid propdrilling we 
                have to manage our state in such a way that it can be used by every component without prop
                drilling</h1>
            <h1 className='text-xl text-primary'>How does prototypical inheritance work?</h1>
            <p>In Prototype Inheritance, an object uses the properties or methods of 
                another object via the prototype linkage. All the JavaScript objects inherit properties and methods from a prototype 
                (like Date objects inherit properties from Date.prototype and so on)</p>
                <h1 className='text-xl text-primary'>What is a unit test? Why should we write unit tests?</h1>
                <p>Let’s start with the definition: Unit testing is a software testing method where 
                    “units”—the individual components of software—are tested. Developers write unit
                     tests for their code to make sure that the code works correctly. 
                    This helps to detect and protect against bugs in the future.</p>
            <h1 className='text-xl text-primary'> React vs. Angular vs. Vue?</h1>
            <p>React’s architecture is easier to scale than Angular, but developing a web
                 app in Angular is faster than React. For rendering a relatively complex UI
                  with some user interaction, all three frameworks are a great choice. But,
                   if you are looking for something that you can add to your app instantly, 
                Vue is an excellent choice.</p>
            </div>
        </div>
    );
};

export default Blog;