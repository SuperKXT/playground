const faces = ["♠", "♥", "♣", "♦"];

export class Deck {
	private deck: string[] = [];
	constructor() {
		this.deck = [];
		for (const face of faces) {
			for (let i = 2; i <= 10; i++) {
				this.deck.push(`${i}${face}`);
			}
			this.deck.push(`J${face}`);
			this.deck.push(`Q${face}`);
			this.deck.push(`K${face}`);
			this.deck.push(`A${face}`);
		}
	}

	shuffle(): void {
		for (let i = 0; i < this.deck.length; i++) {
			const idx = Math.floor(Math.random() * this.deck.length);
			const temp = this.deck[i] as string;
			this.deck[i] = this.deck[idx] as string;
			this.deck[idx] = temp;
		}
	}

	draw(n: number): string[] {
		return this.deck.splice(0, n);
	}
}
