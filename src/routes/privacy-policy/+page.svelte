<script>
	import Header from '$lib/components/Header.svelte';
	import { P } from 'flowbite-svelte';
</script>

<Header page_name="Privacy Policy" page_rout="privacy-policy">
	<svelte:fragment slot="title">Privacy Policy</svelte:fragment>
</Header>

<section class="light">
	<div
		class="shrinked grid w-full gap-8 text-left md:grid-cols-1 md:items-center md:text-left lg:grid-cols-1"
	>
		<div class="news-details mx-auto max-w-4xl p-4">
			<h2>Introduction</h2>
			<p>
				Welcome to Enigmia.ai. Our platform is dedicated to users wanting to solve mathematical
				riddles in an engaging and educational manner. We value your privacy and are committed to
				protecting your personal information. This Privacy Policy outlines the types of data we
				collect, how we use it, and your rights regarding your data.
			</p>
			<h2>Information Collection</h2>
			<p>Enigmia.ai collects the following types of information:</p>
			<ul>
				<li>
					<span class="title">Personal Profile:</span> Information such as your account name (which does
					not need to be your real name) and email address.
				</li>
				<li>
					<span class="title">Riddle Solutions:</span> The solutions you provide for riddles are stored
					in our database.
				</li>
				<li>
					<span class="title">Riddle Analysis:</span> Data on whether riddles were correctly solved and
					which riddles were attempted.
				</li>
				<li>
					<span class="title">Payment Information:</span> Payments are processed via Stripe, which has
					its own policies regarding the collection of credit card information and other payment details.
				</li>
			</ul>
			<h2>Use of Information</h2>
			<p>The information we collect is used for the following purposes:</p>
			<ul>
				<li>
					<span class="title">Service Improvement: </span> Riddle solutions can be analyzed to improve
					our services and the riddle-solving experience.
				</li>
				<li>
					<span class="title">Personal Statistics: </span>Riddle analysis data is used to provide
					personal statistics to help users track their own progress. This data is not shared with
					other users.
				</li>
				<li>
					<span class="title">User Ratings: </span>User ratings may be displayed on leaderboards.
					Users have the option to opt out of this feature.
				</li>
			</ul>
			<h2>Data Sharing</h2>
			<p>
				Enigmia.ai does not share your personal data with third parties. Your information is used
				solely for the purposes outlined in this policy.
			</p>
			<h2>Data Security</h2>
			<p>
				We implement industry-standard security measures to protect your data from unauthorized
				access or breaches. However, no method of transmission over the Internet or electronic
				storage is completely secure, and we cannot guarantee absolute security.
			</p>
			<h2>User Rights</h2>
			<p>
				You have the right to access, update, or delete your personal information. To exercise these
				rights, please contact us at <a href="mailto:info@enigmia.ai">info@enigmia.ai</a>.
			</p>
			<h2>Cookies and Tracking Technologies</h2>
			<p>
				Enigmia.ai may use cookies and similar technologies to enhance your experience on our
				platform. You can manage your cookie preferences in your browser settings.
			</p>
			<h2>Changes to This Policy</h2>
			<p>
				We may update this Privacy Policy from time to time. We will notify you of any changes by
				posting the new policy on this page. The effective date of this policy is June 29, 2024.
			</p>
			<h2>Contact Us</h2>
			<p>
				If you have any questions or concerns about this Privacy Policy or your data, please contact
				us at <a href="mailto:info@enigmia.ai">info@enigmia.ai</a>.
			</p>
			<p>
				By using Enigmia.ai, you agree to the terms outlined in this Privacy Policy. Thank you for
				trusting Enigmia.ai with your personal information. We are committed to providing a safe and
				enjoyable puzzle-solving experience.
			</p>

			<h2>Einführung</h2>
			<p>
				Willkommen bei Enigmia.ai. Unsere Plattform ist für Benutzer gedacht, die mathematische
				Rätsel auf eine ansprechende und lehrreiche Weise lösen möchten. Wir schätzen Ihre
				Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese
				Datenschutzrichtlinie beschreibt, welche Arten von Daten wir sammeln, wie wir sie verwenden
				und welche Rechte Sie in Bezug auf Ihre Daten haben.
			</p>
			<h2>Sammlung von Informationen</h2>
			<p>Enigmia.ai sammelt die folgenden Arten von Informationen:</p>
			<ul>
				<li>
					<span class="title">Persönliches Profil:</span> Informationen wie Ihr Kontoname (der nicht
					Ihr richtiger Name sein muss) und Ihre E-Mail-Adresse.
				</li>
				<li>
					<span class="title">Rätsellösungen:</span> Die Lösungen, die Sie zu den Rätseln angeben, werden
					in unserer Datenbank gespeichert.
				</li>
				<li>
					<span class="title">Rätsel-Analyse:</span> Daten darüber, ob Rätsel richtig gelöst wurden und
					welche Rätsel versucht wurden.
				</li>
				<li>
					<span class="title">Zahlungsinformationen:</span> Zahlungen werden über Stripe abgewickelt,
					das seine eigenen Richtlinien bezüglich der Erfassung von Kreditkarteninformationen und anderen
					Zahlungsdetails hat.
				</li>
			</ul>
			<h2>Verwendung von Informationen</h2>
			<p>Die von uns gesammelten Informationen werden für die folgenden Zwecke verwendet:</p>
			<ul>
				<li>
					<span class="title">Serviceverbesserung: </span> Rätsellösungen können analysiert werden, um
					unsere Dienste und das Rätselerlebnis zu verbessern.
				</li>
				<li>
					<span class="title">Persönliche Statistiken: </span>Die Daten der Rätselanalyse werden
					verwendet, um persönliche Statistiken zu erstellen, die den Benutzern helfen, ihren
					eigenen Fortschritt zu verfolgen. Diese Daten werden nicht an andere Benutzer
					weitergegeben.
				</li>
				<li>
					<span class="title">Benutzer-Bewertungen: </span>Benutzerbewertungen können auf
					Bestenlisten angezeigt werden. Die Benutzer haben die Möglichkeit, diese Funktion zu
					deaktivieren.
				</li>
			</ul>
			<h2>Weitergabe von Daten</h2>
			<p>
				Enigmia.ai gibt Ihre persönlichen Daten nicht an Dritte weiter. Ihre Informationen werden
				ausschließlich für die in dieser Richtlinie beschriebenen Zwecke verwendet.
			</p>
			<h2>Datensicherheit</h2>
			<p>
				Wir setzen branchenübliche Sicherheitsmaßnahmen ein, um Ihre Daten vor unbefugtem Zugriff
				oder Verstößen zu schützen. Keine Methode der Übertragung über das Internet oder der
				elektronischen Speicherung ist jedoch vollkommen sicher, und wir können keine absolute
				Sicherheit garantieren.
			</p>
			<h2>Benutzerrechte</h2>
			<p>
				Sie haben das Recht, Ihre persönlichen Daten einzusehen, zu aktualisieren oder zu löschen.
				Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter <a href="mailto:info@enigmia.ai"
					>info@enigmia.ai</a
				>.
			</p>
			<h2>Cookies und Tracking-Technologien</h2>
			<p>
				Enigmia.ai kann Cookies und ähnliche Technologien verwenden, um Ihre Erfahrung auf unserer
				Plattform zu verbessern. Sie können Ihre Cookie-Präferenzen in den Einstellungen Ihres
				Browsers verwalten.
			</p>
			<h2>Änderungen an dieser Richtlinie</h2>
			<p>
				Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über
				alle Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen.
				Das Datum des Inkrafttretens dieser Richtlinie ist der 29. Juni 2024.
			</p>
			<h2>Kontaktieren Sie uns</h2>
			<p>
				Wenn Sie Fragen oder Bedenken zu dieser Datenschutzrichtlinie oder Ihren Daten haben,
				kontaktieren Sie uns bitte unter <a href="mailto:info@enigmia.ai">info@enigmia.ai</a>.
			</p>
			<p>
				Durch die Nutzung von Enigmia.ai erklären Sie sich mit den in dieser Datenschutzrichtlinie
				aufgeführten Bedingungen einverstanden. Vielen Dank, dass Sie Enigmia.ai Ihre persönlichen
				Daten anvertrauen. Wir sind bestrebt, Ihnen ein sicheres und unterhaltsames Rätselerlebnis
				zu bieten.
			</p>
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: larger;
		margin-top: 1rem;
	}
	li {
		list-style-type: square;
	}
	ul {
		padding-left: 25px;
	}
	.title {
		font-weight: bold;
	}
	p {
		margin-bottom: 0.5rem;
		padding-left: 25px;
	}
	.shrinked {
		padding-top: 0 !important;
	}
</style>
