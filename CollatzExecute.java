public class CollatzExecute
{
	public static void main (String[] args)
	{
		int start = 43 ;

		CollatzFunction cc1 = new CollatzFunction (start) ;


		System.out.print( cc1.getCurrentStep() ) ;


		while ( cc1.getCurrentStep() != 1 )
		{

			if ( cc1.getCurrentStep() % 2 == 0 )
			{
				for ( int i = 0 ; i < cc1.getHorizLength() ; i++ )
				{
					System.out.print(" ") ;
				}

				System.out.print( "\n" ) ;
				for ( int i = 0 ; i < cc1.getHorizLength() ; i++ )
				{
					System.out.print(" ") ;
				}
				System.out.print("|") ;

				cc1.takeStep() ;

				System.out.print( "\n" ) ;
				for ( int i = 0 ; i < cc1.getHorizLength() ; i++ )
				{
					System.out.print(" ") ;
				}
			}

			else if (cc1.getCurrentStep() % 2 != 0 )
			{
				System.out.print ( " -- " ) ;
				cc1.addToHLength(4);
				cc1.addToHLength( Integer.toString( cc1.getCurrentStep() ).length() );

				cc1.takeStep();
			}

			System.out.print( cc1.getCurrentStep() ) ;
		}

		System.out.println("\nNumber of Steps") ;
		System.out.print( cc1.getStepCounter() ) ;

	}
}
