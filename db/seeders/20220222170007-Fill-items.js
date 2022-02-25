module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [
      {
        title: 'КАРТОФЕЛЬ С СЕЛЬДЬЮ',
        ingredients: 'с маринованным луком, зеленью и творожным сыром',
        price: '370₽',
        weight: '320г',
        proteins: '4',
        fats: '20',
        carbs: '3',
        colories: '550',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТАР-ТАР ИЗ ТУНЦА',
        ingredients: 'свежий тунец, клубника, лайм',
        price: '600₽',
        weight: '180г',
        proteins: '9',
        fats: '6',
        carbs: '7',
        colories: '300',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТАРЕЛКА К ВИНУ ',
        ingredients: 'салями милано, пеперони, камамбер, моцарелла, дорблю, скаморца, пармская ветчина',
        price: '890₽',
        weight: '350г',
        proteins: '7',
        fats: '24',
        carbs: '5',
        colories: '750',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ИТАЛЬЯНСКИЕ СЫРЫ',
        ingredients: 'моцарелла фьёр ди латте, камамбер, дорблю, горгонзола, грана падано подаются с мёдом, орехами и конфитюром',
        price: '590₽',
        weight: '220г',
        proteins: '5',
        fats: '22',
        carbs: '8',
        colories: '680',
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'БРУСКЕТТЫ С ВЯЛЕНЫМИ ТОМАТАМИ',
        ingredients: 'муссом из сыра рикотта и базиликом',
        price: '320₽',
        weight: '220г',
        proteins: '1.43',
        fats: '3',
        carbs: '8',
        colories: '150',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'БРУСКЕТТЫ С РОСТБИФОМ',
        ingredients: 'паштетом из печени и мармеладным луком',
        price: '330₽',
        weight: '180г',
        proteins: '6',
        fats: '5',
        carbs: '2',
        colories: '400',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ПЕЧЕНАЯ ГРУША ',
        ingredients: 'с грецкими орехами, горгонзоллой, луком и тимьяном, подается с соусом из инжира и красного вина',
        price: '320₽',
        weight: '250г',
        proteins: '4',
        fats: '2',
        carbs: '4',
        colories: '500',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'БАКЛАЖАН КИМЧИ',
        ingredients: 'с томатной сальсой, луком, кинзой и кунжутом, салатным миксом',
        price: '320₽',
        weight: '200г',
        proteins: '5',
        fats: '6',
        carbs: '2',
        colories: '300',
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ГРИБНОЙ КРЕМ-СУП',
        ingredients: 'шампиньоны, белые грибы, лук и сливки',
        price: '370₽',
        weight: '350мл',
        proteins: '2',
        fats: '11',
        carbs: '3',
        colories: '380',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТОМАТНЫЙ СУП ПО-БУРГОССКИ',
        ingredients: 'суп-пюре из сочных томатов с добавлением овощей',
        price: '290₽',
        weight: '350мл',
        proteins: '1',
        fats: '3',
        carbs: '2',
        colories: '210',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТЫКВЕННЫЙ КРЕМ-СУП',
        ingredients: 'подается с вялеными томатами и укропным маслом',
        price: '310₽',
        weight: '350мл',
        proteins: '2',
        fats: '2',
        carbs: '4',
        colories: '180',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'СИБИРСКИЙ БОРЩ',
        ingredients: 'говядина, фасоль, белые грибы, подается с хлебцами с салом и сметаной',
        price: '370₽',
        weight: '350мл',
        proteins: '4',
        fats: '4',
        carbs: '2',
        colories: '230',
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'УТИНАЯ НОЖКА СУ-ВИД',
        ingredients: 'с шукрутом и морковным пюре',
        price: '490₽',
        weight: '220г',
        proteins: '9',
        fats: '7',
        carbs: '3',
        colories: '380',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТОМЛЕНАЯ ГОВЯДИНА С ПОЛЕНТОЙ',
        ingredients: 'нежная говядина су-вид подается с полентой, сальсой верде, соусом редвайн и каплей трюфельного масла',
        price: '840₽',
        weight: '320г',
        proteins: '12',
        fats: '9',
        carbs: '6',
        colories: '420',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'УТИНАЯ ГРУДКА',
        ingredients: 'подается с картофельным гратеном, морковным пюре и соусом редвайн',
        price: '690₽',
        weight: '380г',
        proteins: '11',
        fats: '7',
        carbs: '5',
        colories: '400',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ФИЛЕ МИНЬОН',
        ingredients: 'Не забывайте выбрать степень прожарки',
        price: '920₽',
        weight: '200г',
        proteins: '11',
        fats: '8',
        carbs: '6',
        colories: '680',
        categoryId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'СИНЕКОРЫЙ ПАЛТУС',
        ingredients: 'запеченый с ароматными травами, подается с картофелем и пюре из зеленого горошка',
        price: '620₽',
        weight: '300г',
        proteins: '7',
        fats: '7',
        carbs: '5',
        colories: '360',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТРЕСКА С ДИКИМ РИСОМ',
        ingredients: 'подается с щучьей икрой и сливочным соусом',
        price: '590₽',
        weight: '300г',
        proteins: '9',
        fats: '7',
        carbs: '4',
        colories: '390',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ЛОСОСЬ С ОВОЩНЫМ СОТЕ',
        ingredients: 'подаётся с жареными фисташками и соусом терияки',
        price: '760₽',
        weight: '230г',
        proteins: '10',
        fats: '6',
        carbs: '9',
        colories: '440',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'БАРАБУЛЬКА',
        ingredients: 'подается с соусом тартар, лимоном и салатным миксом',
        price: '380₽',
        weight: '250г',
        proteins: '8',
        fats: '5',
        carbs: '7',
        colories: '360',
        categoryId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'КУРИНЫЕ КРЫЛЫШКИ С ЧИЛИ',
        ingredients: 'с сельдереем, морковью и соусом бою чиз',
        price: '390₽',
        weight: '300г',
        proteins: '7',
        fats: '9',
        carbs: '3',
        colories: '310',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ШАШЛЫЧОК ИЗ БАРАНЬЕГО ЯЗЫКА',
        ingredients: 'подаётся с лимоном, салатным миксом и домашним кетчупом',
        price: '720₽',
        weight: '250г',
        proteins: '12',
        fats: '4',
        carbs: '5',
        colories: '510',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТИГРОВЫЕ КРЕВЕТКИ',
        ingredients: 'жареные на гриле в оливковом масле, подаются с розмарином в крупной соли',
        price: '580₽',
        weight: '360г',
        proteins: '14',
        fats: '5',
        carbs: '3',
        colories: '600',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ГРИЛЬЯТА МАРИНАРА',
        ingredients: 'лосось, креветки, мидии и осьминог, обжаренные на гриле с грибами, цукини, баклажанами и томатами, подаётся с соусом сладкий чили',
        price: '870₽',
        weight: '320г',
        proteins: '12',
        fats: '7',
        carbs: '5',
        colories: '900',
        categoryId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'БАСКАЙОЛА',
        ingredients: 'томаты, грибы и пармская ветчина, неаполитанский соус',
        price: '560₽',
        weight: '340г',
        proteins: '5',
        fats: '8',
        carbs: '4',
        colories: '800',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МАРГАРИТА',
        ingredients: 'моцарелла и базилик, неаполитанский соус',
        price: '360₽',
        weight: '340г',
        proteins: '2',
        fats: '8',
        carbs: '4',
        colories: '700',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'САЛЬСИЧА',
        ingredients: 'куриные и говяжьи колбаски, моцарелла, базилик, неаполитанский соус',
        price: '520₽',
        weight: '390г',
        proteins: '4',
        fats: '9',
        carbs: '4',
        colories: '840',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ПЕПЕРОНИ',
        ingredients: 'пеперони, халапеньо, базилик, неаполитанский соус',
        price: '360₽',
        weight: '390г',
        proteins: '3',
        fats: '8',
        carbs: '4',
        colories: '840',
        categoryId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МИЛКШЕЙКИ',
        ingredients: 'сливочный молочный коктейль на основе мороженого и молока',
        price: '240₽',
        weight: '390г',
        proteins: '2',
        fats: '5',
        carbs: '3',
        colories: '400',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ФРУКТОВЫЙ ЧАЙ',
        ingredients: 'согревающий напиток на основе ягод или фруктов',
        price: '280₽',
        weight: '390г',
        proteins: '0',
        fats: '2',
        carbs: '1',
        colories: '170',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ЛИМОНАД МАНДАРИНОВЫЙ',
        ingredients: 'мандарины, мята, сироп маракуйя, минеральная вода',
        price: '300₽',
        weight: '1000мл',
        proteins: '0',
        fats: '4',
        carbs: '3',
        colories: '360',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ЛИМОНАД КРЕМ-СОДА',
        ingredients: 'согревающий напиток на основе ягод или фруктов',
        price: '150₽',
        weight: '300мл',
        proteins: '0',
        fats: '1',
        carbs: '1',
        colories: '190',
        categoryId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Items',null, {restartIdentity:true, truncate:true});
  },
};
