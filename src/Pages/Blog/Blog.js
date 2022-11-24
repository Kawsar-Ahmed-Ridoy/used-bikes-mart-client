import React from "react";

const Blog = () => {
  return (
    <div className="mb-16 mt-12  max-w-screen-xl mx-auto">
      <div className="mb-8">
        <h2 className="text-center text-4xl font-bold ">Blog</h2>
        <p className="text-center  text-gray-500">__________________</p>
      </div>
      <div className="flex justify-around text-center align-middle flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              What are the different ways to manage a state in a React
              application?
            </h2>
            <p>
              There are four main types of state you need to properly manage in
              your React apps: Local state Global state Server state URL state
              Let's cover each of these in detail: Local (UI) state – Local
              state is data we manage in one or another component. Local state
              is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs. Global (UI) state – Global state is data we manage across
              multiple components. Global state is necessary when we want to get
              and update data anywhere in our app, or in multiple components at
              least. A common example of global state is authenticated user
              state. If a user is logged into our app, it is necessary to get
              and change their data throughout our application. Sometimes state
              we think should be local might become global. Server state – Data
              that comes from an external server that must be integrated with
              our UI state. Server state is a simple concept, but can be hard to
              manage alongside all of our local and global UI state. There are
              several pieces of state that must be managed every time you fetch
              or update data from an external server, including loading and
              error state. Fortunately there are tools such as SWR and React
              Query that make managing server state much easier. URL state –
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              How does prototypical inheritance work?
            </h2>
            <p>
              JavaScript objects are dynamic "bags" of properties (referred to
              as own properties). JavaScript objects have a link to a prototype
              object. When trying to access a property of an object, the
              property will not only be sought on the object but on the
              prototype of the object, the prototype of the prototype, and so on
              until either a property with a matching name is found or the end
              of the prototype chain is reached. <br />
              Inheriting "methods" JavaScript does not have "methods" in the
              form that class-based languages define them. In JavaScript, any
              function can be added to an object in the form of a property. An
              inherited function acts just as any other property, including
              property shadowing as shown above (in this case, a form of method
              overriding). When an inherited function is executed, the value of
              this points to the inheriting object, not to the prototype object
              where the function is an own property. <br />
              Constructors The power of prototypes is that we can reuse a set of
              properties if they should be present on every instance —
              especially for methods. Suppose we are to create a series of
              boxes, where each box is an object that contains a value which can
              be accessed through a getValue function.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">
              What is a unit test? Why should we write unit tests?
            </h2>
            <p>
              A unit test typically comprises of three stages: plan, cases and
              scripting and the unit test itself. In the first step, the unit
              test is prepared and reviewed. The next step is for the test cases
              and scripts to be made, then the code is tested. Test-driven
              development requires that developers first write failing unit
              tests. Then they write code and refactor the application until the
              test passes. TDD typically results in an explicit and predictable
              code base. Each test case is tested independently in an isolated
              environment, as to ensure a lack of dependencies in the code. The
              software developer should code criteria to verify each test case,
              and a testing framework can be used to report any failed tests.
              Developers should not make a test for every line of code, as this
              may take up too much time. Developers should then create tests
              focusing on code which could affect the behavior of the software
              being developed. Unit testing involves only those characteristics
              that are vital to the performance of the unit under test. This
              encourages developers to modify the source code without immediate
              concerns about how such changes might affect the functioning of
              other units or the program as a whole. Once all of the units in a
              program have been found to be working in the most efficient and
              error-free manner possible, larger components of the program can
              be evaluated by means of integration testing. Unit tests should be
              performed frequently, and can be done manually or can be
              automated.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-6">
          <div className="card-body">
            <h2 className="card-title">React vs. Angular vs. Vue?</h2>
            <p>
              <strong>Angular vs React</strong> If the choice you’re making is based on Angular
              vs React alone, then you’ll simply need to consider the pros and
              cons discussed for those libraries in this post. But overall, keep
              in mind that both libraries can be used for mobile and web apps,
              while Angular is generally better for more complex apps that are
              enterprise-ready. React often requires extra modules and
              components, which keeps the core library small, but means there’s
              extra work involved when incorporating outside tools. Angular, on
              the other hand, is more of a full-fledged solution that doesn’t
              require extras like React often does, though it does have a
              steeper learning curve for its core compared to React. React is
              more suitable for intermediate to advanced JavaScript developers
              who are familiar with concepts from ES6 and up, while Angular
              favors those same developers who are also familiar with
              TypeScript. <br />
              <strong>React vs Vue</strong> The choice between React vs Vue is often debated and
              it’s not an easy one. Vue has a vibrant and ever-growing community
              and has taken over popularity vs. React in many respects. React
              developers are still churning out lots of new components and
              extras, so there’s no sign that React is on the decline either.
              Vue is generally more suited to smaller, less complex apps and is
              easier to learn from scratch compared to React. Vue can be easier
              to integrate into new or existing projects and many feel its use
              of HTML templates along with JSX is an advantage. Overall, Vue
              might be the best choice if you’re a newer developer and not as
              familiar with advanced JavaScript concepts, while React is quite
              well suited for experienced programmers and developers who have
              worked with object-oriented JavaScript, functional JavaScript, and
              similar concepts. <br />
              <strong>Angular vs Vue</strong> In most cases, you probably wouldn’t be deciding
              between only Angular and Vue. They are vastly different libraries
              with very different feature sets and learning curves. Vue is the
              clear choice for less experienced developers, and Angular would be
              preferred for those working on larger apps. A large library like
              Angular would require more diligence in keeping up with what’s
              new, while Vue would be less demanding in this regard and the fact
              that the two most recent major releases of Vue are in separate
              repositories helps. It should also be noted that Vue was created
              by a developer who formerly worked on Angular for Google, so
              that’s another thing to keep in mind, though that wouldn’t have a
              huge impact on your decision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
