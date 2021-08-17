1.bind this 的三种方法
eg: 有一个helper function：  onFormSubmit ()
  1.写一个constructor， this.myfunction = this.myfunction.bind(this);

  2.直接写成箭头函数， onFormSubmit = e => { } ,  <form onSubmit={this.onFormSubmit}>

  3.在invoke的地方写成 箭头函数 
  例如： <form onSubmit={(event) => this.onFormSubmit(event)}>

  2.event.preventDefault(). prevent form refresh after hit enter