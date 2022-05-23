import java.util.ArrayList ;

public class CollatzFunction
{
	private int start ;
	private int currentStep = start ;
	private int stepCounter = 1 ;
	private int horizLength = 0 ;
	private int hLengthHold = 0 ;


//CONSTRUCTORS

	public CollatzFunction ()
	{
		this.start = 2 ;
	}

	public CollatzFunction (int start)
	{
		this.start = start ;
		this.currentStep = start ;
		this.stepCounter = 1 ;
		this.horizLength = 0 ;
		this.hLengthHold = 0 ;
	}

//GETTERS AND SETTERS

	public void setStart (int start)
	{
		this.start = start ;
		this.currentStep = start ;
		this.stepCounter = 1 ;
		this.horizLength = 0 ;
	}

	public int getStart ()
	{
		return this.start ;
	}

	public int getCurrentStep ()
	{
		return currentStep ;
	}

	public void setHorizLength (int hLength)
	{
		this.horizLength = hLength ;
	}

	public int getHorizLength ()
	{
		return this.horizLength ;
	}

	public int getHLengthHold ()
	{
		return this.hLengthHold ;
	}

	public void setHLengthHold (int hLengthHold)
	{
		this.hLengthHold = hLengthHold ;
	}

	public int getStepCounter ()
	{
		return this.stepCounter ;
	}

//OTHER METHODS

	public int nDivTwo ()
	{
		int quotient = currentStep / 2 ;
		return quotient ;
	}

	public int threeNLessOne ()
	{
		int prodSum = 3 * currentStep + 1 ;
		return prodSum ;
	}

	public void takeStep ()
	{
		int nextStep = (this.currentStep % 2 == 0) ? this.nDivTwo() : this.threeNLessOne() ;
		this.currentStep = nextStep ;
		this.stepCounter += 1 ;
	}

	public void addToHLength (int hAdd)
	{
		this.horizLength += hAdd ;
	}

}
