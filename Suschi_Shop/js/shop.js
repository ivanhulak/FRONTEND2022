class Roll{
    constructor(id, name, quantity, gram, price, count = 0){
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.gram = gram;
        this.price = price;
        this.count = count;
    }
    print(){
        console.log(`name: ${this.name}\nprice: ${this.price}`)
    }
}
class User{
    constructor(id, name, surname, user_tel, rolls){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.user_tel = user_tel;
        this.rolls = rolls;
    }
}
class Shop{
    rolls = [];
    users = [];

    // **************************  Rolls methods  ************************
    add_roll(roll){
        this.rolls.push(roll);
    }
    find_roll_by_name(name_of_roll){
        let find_roll = this.rolls.find(roll => roll.name === name_of_roll);
        let index = this.rolls.indexOf(find_roll);
        console.log(`Найденый рол: "${name_of_roll}" найден!\n ${JSON.stringify(this.rolls[index])}`);
    }
    del_roll_by_name(name_of_roll){
        let find_roll = this.rolls.find(roll => roll.name === name_of_roll);
        let index = this.rolls.indexOf(find_roll);
        console.log(index);
        this.rolls.splice(index, 1);
        console.log(`${name_of_roll} по индексу ${index} был успешно удален!`);
    }
    get_roll(user, roll){
        let index_roll = this.rolls.indexOf(roll);
        let index_user = this.users.indexOf(user);
        this.users[index_user].rolls.push(roll);
        this.rolls[index_roll].user = this.users[index_user];
    }
    del_roll_from_cart(user, roll){
        let index_roll = this.rolls.indexOf(roll);
        let index_user = this.users.indexOf(user);
        let index_roll_in_user = this.users[index_user].rolls.indexOf(roll)
        this.users[index_user].rolls.splice(index_roll_in_user, 1);
    }
    // **************************  Users methods  ************************
    add_user(user){
        this.users.push(user);
    }
    find_user_by_id(user_id){
        let find_user = this.users.find(user => user.id === user_id);
        let index = this.users.indexOf(find_user);
        console.log(this.users[index]);
    }
    find_user_by_tel(user_tel){
        let find_user = this.users.find(user => user.user_tel === user_tel);
        let index = this.users.indexOf(find_user);
        console.log(this.users[index]);
    }
    del_user_by_id(user_id){
        let find_user = this.users.find(user => user.id === user_id);
        let index = this.users.indexOf(find_user);
        this.users.splice(index ,1);
        console.log(`${this.users[index]} удален из списка пользователей за унікальним номером`);
    }
    del_user_by_tel(user_tel){
        let find_user = this.users.find(user => user.user_tel === user_tel);
        let index = this.users.indexOf(find_user);
        this.users.splice(index ,1);
        console.log(`${this.users[index]} удален из списка пользователей за телефоном`);
    }
    get_sale(users){
        users.forEach(function(user){
            if (user.rolls.length > 0){
                var summ_of_order = 0;
                user.rolls.forEach(function(item){
                    summ_of_order += item.price;
                });
                    if (summ_of_order > 550){
                        console.log(`User: ${user.name} замовив на суму: ${summ_of_order} грн\nЗнижку на доставку отримано!`);
                    } else{
                        console.log(`User: ${user.name} замовив на суму: ${summ_of_order} грн\nДоставка 40 грн`);
                    };
            } else{
                console.log("User: " + user.name + " ничего не заказал")
            }
        });
    }
}

let shop = new Shop();

let roll1 = new Roll("01", "Филадельфия хит ролл", 6, 180, 300);
let roll2 = new Roll("02", "Калифорния темпура", 6, 205, 250);
let roll3 = new Roll("03", "Запеченый ролл «Калифорния»", 6, 182, 230);

shop.add_roll(roll1);
shop.add_roll(roll2);
shop.add_roll(roll3);


let user1 = new User("6181", "John", "Kawa", "0970625704", [{id: "03", name: "Запеченый ролл «Калифорния»", quantity: 6, gram: 182, price: 230, count: 2}, {id: "01", name: "Филадельфия хит ролл", quantity: 6, gram: 180, price: 300, count: 1}, ]);
let user2 = new User("1911", "Megane", "Train", "0973190688", [{id: "03", name: "Запеченый ролл «Калифорния»", quantity: 6, gram: 182, price: 230, count: 5}]);
let user3 = new User("0809", "Steve", "Milev", "0963005035", [{id: "03", name: "Запеченый ролл «Калифорния»", quantity: 6, gram: 182, price: 230, count: 7}, {id: "01", name: "Филадельфия хит ролл", quantity: 6, gram: 180, price: 300, count: 1}, ]);

shop.add_user(user1);
shop.add_user(user2);
shop.add_user(user3);

console.log(shop.rolls);
console.log(shop.users);

shop.get_sale(shop.users);
shop.del_roll_by_name(roll3.name);
shop.find_roll_by_name(roll2.name);
