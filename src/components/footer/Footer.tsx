import styles from './Footer.module.css';
export default function Footer() {
	return (
		<>
			<div className={styles.mainBox}>
				<div className={styles.firstBox}>
					<div>
						<p>unimind.dao</p>
						<p>Be where the change happens</p>
					</div>
					<div>
						<div className={styles.firstBox}>
							<div className={styles.partnersBox}>
								<p>TWIT</p>
							</div>
							<div className={styles.partnersBox}>
								<p>DISCO </p>
							</div>
							<div className={styles.partnersBox}>
								<p>YT </p>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.partnersMainBox}>
					<div className={styles.partnersBox}>
						<a>Contact</a>
					</div>
					<div className={styles.partnersBox}>
						<a>Webtrzy.xyz</a>
					</div>
					<div className={styles.partnersBox}>
						<a>NFTPolska</a>
					</div>
				</div>
				<div className={styles.endBox}>
					<p>2022 unimind.dao</p>
				</div>
			</div>
		</>
	);
}
