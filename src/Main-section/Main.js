import React, { useEffect } from 'react';

const Main = () => {
    const MenuBlock = () => {
        const menuItems = [
            {
                image: 'images/capyava.png',
                item_name:'kebab',
                price: 990,
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum excepturi, veniam sequi modi explicabo suscipit porro dolore nam.'
            },
            {
                image: 'images/capyava.png',
                item_name:'kebab',
                price: 990,
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel laborum excepturi, veniam sequi modi explicabo suscipit porro dolore nam.'
            },
        ];

        const menuTypes = [
            'georgian',
            'ukrainian',
            'appetizers',
            'brazier'
        ];

        return (
            <div className="demo__menu">
                {menuTypes.map((type, index) => (
                    <div key={index} className="demo__type-menu">
                    <h1>{type}</h1>
                    {menuItems.map((item, index) => (
                    <div key={index} className="demo__menu-item">
                        <img src={item.image} className="demo__item-img"></img>
                        <div className="demo__item-name">{item.item_name}......................................................</div>
                        <div className="demo__item-price">{item.price}</div>
                        <div className="demo__item-desc">{item.desc}</div> 
                    </div>
                    ))}
                </div>
                ))}
          </div>
        );
      };
      
    return (
        <>
            <div id="welcome" class="full-width">
                <h1>Ресторан «Горный ручей»</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus expedita quia ratione soluta natus velit at. Eaque, corporis ratione quisquam rerum beatae exercitationem alias voluptates ea corrupti inventore maiores enim! [хз что тут делать]</p>
            </div>

            <div className="story full-width cent-cont min-block-height">
                <span className="worker-name">tasty and crunchy</span>
                <h1 className="undl-head">our story</h1>
                <p>Lorem ipsum, dolor sit <span className="important dark-theme">amet consectetur adipisicing</span> elit. Temporibus ab quae vel perferendis corrupti ipsum placeat excepturi porro similique incidunt, modi enim cum, nam quis rem totam doloribus nemo aut. Lorem, <span className="important dark-theme">ipsum dolor</span> sit amet consectetur adipisicing elit. Maiores adipisci cum nam, ad, placeat <span className="important dark-theme">animi ipsa</span> neque sapiente dolor dolorum iusto provident quas quis, repudiandae a distinctio rerum officiis harum?</p>

                <div className="half-width">
                    <img src="/images/ruchey.jpg" alt="" />
                    <img src="/images/ruchey.jpg" alt="" />
                </div>
                
                <p className="worker-name">Sam Lake</p>
            </div>

            <div className="half-width set-h info min-block-height cent-cont">
                <h1 className="undl-head">concept</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className="important dark-theme">Optio repellat assumenda</span> fugit, nam, officia aut, quis modi aliquam aspernatur dolorum sed nihil dignissimos quidem eaque nobis commodi quae cum totam.</p>
                <p>Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Sunt in libero alias omnis <span className="important dark-theme">quod nam unde ea magnam</span> iste tenetur obcaecati voluptatibus sed rerum aliquam dolore, voluptatum, qui inventore natus.</p>
                <p>Lorem ipsum, dolor, sit amet consectetur adipisicing elit. Sunt in libero alias omnis <span className="important dark-theme">quod nam unde ea magnam</span> iste tenetur obcaecati voluptatibus sed rerum aliquam dolore, voluptatum, qui inventore natus.</p>
            </div>
            <div className="half-width set-h concept-ph min-block-height"></div>

            <div className="full-width">
                <div className="demo__vertical-line"></div>
                <MenuBlock />
            </div>

            <div className="half-width emp-ph min-block-height"></div>
            <div className="half-width info cent-cont min-block-height">
                <h1 className="undl-head">Персонал</h1>
                <p>If I drive for you, <span className="important dark-theme">you get your money</span>. You tell me where we start, where we're going, where we're going afterwards. <span className="important dark-theme">I give you five minutes</span> when we get there. Anything happens in that five minutes and I'm yours.</p><p><span className="important dark-theme">No matter what.</span> Anything a minute on either side of that and you're on your own. I don't sit in while you're running it down. I don't carry a gun. <span className="important dark-theme">I drive.</span></p>
                <img src="/images/goslingava.png" alt="Аватар" class="avatar" />
                <p><span className="worker-name">Ryan Gosling</span><span className="worker-work"><br />the driver</span></p>
            </div>

            <div className="half-width info min-block-height cent-cont">
                <h1 className="undl-head">Bar</h1>
                <p>Nestled in the heart of an ancient forest, <span className="important">Mountain Stream</span> is a rustic haven with a charming atmosphere. The bar, crafted from the heartwood of <span className="important">ancient oaks</span>, stands as a testament to exquisite krasnolud craftsmanship. The air is filled with the enticing aroma of pine and <span className="important">wildflowers</span>, setting the stage for a unique blend of mead, ale, and spirits.</p>
            </div>
            <div className="half-width bar-ph min-block-height"></div>
                <div className="contact half-width min-block-height cent-cont">
                <h1 className="undl-head">Contacts</h1>
                <p>Телефон:</p>
                <p>+7 (978) 925-42-54</p>
                <p>Время работы:</p>
                <p>Ежедневно - 12:00-00:00</p>
                <p>Адрес:</p>
                <p>Ялта, пгт. Виноградное, ул. Яузы 12</p>
                <p>ig: @gorniy_ruchey</p>
            </div>
        </>
      );
};

export default Main;