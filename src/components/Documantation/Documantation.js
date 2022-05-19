import React from 'react';

const Documantation = () => {
    return (
        <div className='container my-5 py-5 space'>
            <h1 className='mb-5 text-white'>DOCUMENTATION</h1>
            <div class="card m-3 bg-primary ">
                <div class="card-header text-white ">
                    <h5>Difference between javascript and nodejs</h5>
                </div>
                <div class="card-body text-white">
                    <blockquote class="blockquote mb-0">
                        <p>Javascript Vs Node.js</p>
                        <p>Javascrit is a programming language used for scripting on browswer on the other hand Node.js is a run time environment for Javascript which enables to run javascript code outside of browser that otherwise would not have been possible.JavaScript is used for dom manupulation but nodejs does not offer the DOM manupulation functionality as it's used for server side development. It uses the V8 engine of javascript and it's written in C and C++  alogside Javascript laguage   </p>

                    </blockquote>
                </div>
            </div>
            <div class="card m-3 bg-primary">
                <div class="card-header text-white">
                    <h5>When should you use nodejs and when should you use mongodb</h5>
                </div>
                <div class="card-body text-white">
                    <blockquote class="blockquote mb-0 ">
                        <p> Node.js and Mongodb Utility</p>
                        <p><h6>Node.js</h6> is perfect for  Real-time applications, IoT applications, Collaborative tools, Data streaming applications and Applications relying on scalability. Node is non-blocking, event-driven servers it's best for scalable applications which does not require massive computation in server as it relays on single CPU core.Heavy computations on the server will block all other requests.  </p>
                        <p><h6>Mongodb</h6>  is mainly used for semistructured document centric data where it's hard to keep the data in to the schema of relational database. Mongodb stores data into distributed servers and it's highly scalable.  </p>

                    </blockquote>
                </div>
            </div>
            <div class="card m-3 bg-primary">
                <div class="card-header text-white">
                    <h5> Differences between sql and nosql databases.</h5>
                </div>
                <div class="card-body text-white">
                    <blockquote class="blockquote mb-0 ">
                        <p>SQL vs noSQL</p>
                        <p> sql is relational and nosql is non-relational database. sql datas are stored in tabular format on the other hand nosql datas are stored in document, key-value, graph, or wide-column format. sql database is vartically scalable & has predefined schema.Nosql is unstrctured and horaizontally scalable </p>
                    </blockquote>
                </div>
            </div>
            <div class="card m-3 bg-primary">
                <div class="card-header text-white">
                    <h5> What is the purpose of jwt and how does it work</h5>
                </div>
                <div class="card-body text-white">
                    <blockquote class="blockquote mb-0 ">
                        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server</p>
                        <p>Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>

                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default Documantation;