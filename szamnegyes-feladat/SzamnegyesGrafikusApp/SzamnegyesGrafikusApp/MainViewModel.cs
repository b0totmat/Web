using CommunityToolkit.Mvvm.ComponentModel;
using CommunityToolkit.Mvvm.Input;

namespace SzamnegyesGrafikusApp.ViewModels
{
    public partial class MainViewModel : ObservableObject
    {
        [ObservableProperty]
        private int[][] _numbers;

        [ObservableProperty]
        private char[] _corners;

        public MainViewModel()
        {
            Numbers = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
            Corners = ['a', 'b', 'c', 'd'];
        }

        [RelayCommand]
        private void Increase(char corner)
        {
            switch(corner)
            {
                case 'a':
                    Numbers[0][0]++;
                    break;
                case 'b':
                    Numbers[0][2]++;
                    break;
                case 'c':
                    Numbers[2][0]++;
                    break;
                case 'd':
                    Numbers[2][2]++;
                    break;
            }

            Numbers[0][1] = Numbers[0][0] + Numbers[0][2];
            Numbers[1][0] = Numbers[0][0] + Numbers[2][0];
            Numbers[1][2] = Numbers[0][2] + Numbers[2][2];
            Numbers[2][1] = Numbers[2][0] + Numbers[2][2];
            Numbers[1][1] = Numbers[0][0] + Numbers[0][2] + Numbers[2][0] + Numbers[2][2];

            OnPropertyChanged(nameof(Numbers));
        }

        [RelayCommand]
        private void ClearTable()
        {
            Numbers = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
        }
    }
}
