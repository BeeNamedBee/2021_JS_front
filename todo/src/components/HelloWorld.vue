<template>

<div class="cards">
  <div class="card">
    <div class="person-card">
      <div class="picture">
        <img src="https://i2.wp.com/creapills.com/wp-content/uploads/2018/03/30-photos-absurdes-banques-dimages-23.jpg?resize=800%2C536&ssl=1" class="avatar" />
      </div>
      <div class="person-name">
        Кто: Смирнов М. В.
      </div>
      <div class="person-group">
        Группа: БСБО-04-19
      </div>
      <div class="person-desc">
        Мои умения и навыки: &#x1F575; <br />
        Дизайн
      </div>
    </div>
  </div>

  <div class="card">
    <div class="form-card">
      <form>
        <div class="form-title">
          Обратная связь
        </div>
        <div class="form-name-div">
          <input type="text" required placeholder="Кто:" class="form-name" />
        </div>
        <div class="form-mail-div">
          <input type="text" required placeholder="Почта:" class="form-mail" />
        </div>
        <div class="form-comment-div">
          <input type="text" required placeholder="Комментарий:" class="form-comment" />
        </div>
        <div class="form-submitBtn-div">
          <button type="submit" class="form-submitBtn">
            Нажать кнопку
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.card {
  margin: 50px;
  padding: 25px;
  box-shadow: 0px 5px 10px 5px rgba(0, 0, 255, .2);
  border-radius: 10px;
}

.avatar {
  width: 156px;
  border: 5px solid transparent;
  border-image: linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%); 
  border-image-slice: 1;
  border-radius: 15%!important;
}

.picture {
  margin: 15px;
}

.person-name{
  color: #ff4411; 
  font-family: 'Lato', sans-serif; 
  font-size: 36px; 
  font-weight: 300;
  margin: 10px;
}

.person-group{
  color: #f2f2f2;
  background: #ff4a4a;
  font-family: 'Open Sans', sans-serif;
  font-size: 34px; 
  font-weight: 300;
  margin: 10px 0;
}

.person-desc{
   color: #d54d7b;
   font-family: "Great Vibes", cursive;
   font-size: 30px;
   font-weight: normal;
   text-align: center;
   text-shadow: 0 1px 1px #fff;
}

.form-name {
  margin: 20px 0;
  border: solid 2px lightblue;
  border-radius: 5px;
}

.form-mail {
  width: 80%;
  border: solid 2px lightblue;
  border-radius: 5px;
  height: 100%;
}

.form-comment-div {
  height: 100px;
  margin: 20px;
}

.form-comment {
  width: 80%;
  height: 100%;
  border: solid 2px lightblue;
  border-radius: 5px;
  font-size: 30px;
  font-family: unset;
} 

.form-submitBtn {
  width: 80%;
  height: 100%;
  border: solid 2px lightblue;
  border-radius: 5px;
}

</style>
