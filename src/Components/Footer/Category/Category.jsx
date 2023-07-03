import  style  from "../Footer.module.scss";
export const Category = () => (
	<div className={style.category}>
	<h3 className={style.categoryTitle}>Каталог</h3>
	<ul className={style.categoryList}>
		<li>
			<p className={style.categorySubtitle}>Женщины</p>
			<ul className={style.categorySublist}>
				<li><a className={style.link}>Бюстгальтеры</a></li>
				<li><a className={style.link}>Трусы</a></li>
				<li><a className={style.link}>Носки</a></li>
				<li><a className={style.link}>Халаты</a></li>
				<li><a className={style.link}>Термобелье</a></li>
				<li><a className={style.link}>Пижамы</a></li>	
			</ul>
		</li>
		<li>
			<p className={style.categorySubtitle}>Мужчины</p>
			<ul className={style.categorySublist}>
				<li><a className={style.link}>Трусы</a></li>
				<li><a className={style.link}>Носки</a></li>
				<li><a className={style.link}>Халаты</a></li>
				<li><a className={style.link}>Термобелье</a></li>
			</ul>
		</li>
	</ul>
</div>
)